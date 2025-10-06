import { NextRequest, NextResponse } from 'next/server';
import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';
import { CustomerProject } from '../../../lib/customerProjects';

export async function POST(request: NextRequest) {
  try {
    const newProject: CustomerProject = await request.json();
    
    // Read the current projects file
    const projectsFilePath = join(process.cwd(), 'lib', 'customerProjects.ts');
    let fileContent = readFileSync(projectsFilePath, 'utf8');
    
    // Find the closing bracket of the sampleProjects array
    const arrayEndPattern = /(\s*}\s*]\s*;\s*)/;
    const match = fileContent.match(arrayEndPattern);
    
    if (!match) {
      throw new Error('Could not find projects array in file');
    }
    
    // Generate the new project code
    const projectCode = `  ,\n  ${JSON.stringify(newProject, null, 2).replace(/\n/g, '\n  ')}`;
    
    // Insert the new project before the closing bracket
    const insertionPoint = match.index!;
    const newFileContent = 
      fileContent.slice(0, insertionPoint) + 
      projectCode + 
      fileContent.slice(insertionPoint);
    
    // Write the updated file
    writeFileSync(projectsFilePath, newFileContent, 'utf8');
    
    return NextResponse.json({ 
      success: true, 
      message: 'Project added successfully' 
    });
    
  } catch (error) {
    console.error('Error saving project:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to save project: ' + (error as Error).message 
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    // Import the projects dynamically to get the latest data
    const { sampleProjects } = await import('../../../lib/customerProjects');
    
    return NextResponse.json({ 
      success: true, 
      projects: sampleProjects,
      count: sampleProjects.length 
    });
    
  } catch (error) {
    console.error('Error fetching projects:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to fetch projects' 
      },
      { status: 500 }
    );
  }
}

export async function PUT(request: NextRequest) {
  try {
    const updatedProject: CustomerProject = await request.json();
    
    // Read the current projects file
    const projectsFilePath = join(process.cwd(), 'lib', 'customerProjects.ts');
    let fileContent = readFileSync(projectsFilePath, 'utf8');
    
    // Import current projects to find the one to update
    const { sampleProjects } = await import('../../../lib/customerProjects');
    const projectIndex = sampleProjects.findIndex(p => p.id === updatedProject.id);
    
    if (projectIndex === -1) {
      return NextResponse.json(
        { success: false, error: 'Project not found' },
        { status: 404 }
      );
    }
    
    // Replace the entire sampleProjects array
    const updatedProjects = [...sampleProjects];
    updatedProjects[projectIndex] = updatedProject;
    
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
      message: 'Project updated successfully',
      project: updatedProject
    });
    
  } catch (error) {
    console.error('Error updating project:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to update project: ' + (error as Error).message 
      },
      { status: 500 }
    );
  }
}