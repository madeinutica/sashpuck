import { NextRequest, NextResponse } from 'next/server';
import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id: projectId } = await params;
    
    // Read the current projects file
    const projectsFilePath = join(process.cwd(), 'lib', 'customerProjects.ts');
    let fileContent = readFileSync(projectsFilePath, 'utf8');
    
    // Import current projects to find the one to delete
    const { sampleProjects } = await import('../../../../lib/customerProjects');
    const projectIndex = sampleProjects.findIndex(p => p.id === projectId);
    
    if (projectIndex === -1) {
      return NextResponse.json(
        { success: false, error: 'Project not found' },
        { status: 404 }
      );
    }
    
    // Remove the project from the array
    const updatedProjects = sampleProjects.filter(p => p.id !== projectId);
    
    const projectsArrayString = JSON.stringify(updatedProjects, null, 2);
    
    // Replace the sampleProjects array in the file
    const arrayPattern = /export const sampleProjects: CustomerProject\[\] = \[[\s\S]*?\];/;
    const newFileContent = fileContent.replace(
      arrayPattern,
      `export const sampleProjects: CustomerProject[] = ${projectsArrayString};`
    );
    
    // Write the updated file
    writeFileSync(projectsFilePath, newFileContent, 'utf8');
    
    return NextResponse.json({ 
      success: true, 
      message: 'Project deleted successfully'
    });
    
  } catch (error) {
    console.error('Error deleting project:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to delete project: ' + (error as Error).message 
      },
      { status: 500 }
    );
  }
}