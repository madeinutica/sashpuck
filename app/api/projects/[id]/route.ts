import { NextRequest, NextResponse } from 'next/server';
import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';
import { CustomerProject } from '../../../../lib/customerProjects';

const PROJECTS_FILE_PATH = join(process.cwd(), 'data', 'projects.json');

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id: projectId } = await params;

    // Read the current projects file
    const fileContent = readFileSync(PROJECTS_FILE_PATH, 'utf8');
    const projects: CustomerProject[] = JSON.parse(fileContent);

    // Find the project to delete
    const projectIndex = projects.findIndex(p => p.id === projectId);

    if (projectIndex === -1) {
      return NextResponse.json(
        { success: false, error: 'Project not found' },
        { status: 404 }
      );
    }

    // Remove the project from the array
    projects.splice(projectIndex, 1);

    // Write back to file
    writeFileSync(PROJECTS_FILE_PATH, JSON.stringify(projects, null, 2), 'utf8');

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