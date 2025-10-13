import { NextRequest, NextResponse } from 'next/server';
import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';
import { CustomerProject } from '../../../lib/customerProjects';

const PROJECTS_FILE_PATH = join(process.cwd(), 'data', 'projects.json');

export async function POST(request: NextRequest) {
  try {
    const newProject: CustomerProject = await request.json();

    // Read the current projects file
    const fileContent = readFileSync(PROJECTS_FILE_PATH, 'utf8');
    const projects: CustomerProject[] = JSON.parse(fileContent);

    // Add the new project
    projects.push(newProject);

    // Write back to file
    writeFileSync(PROJECTS_FILE_PATH, JSON.stringify(projects, null, 2), 'utf8');

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
    // Read projects from JSON file
    const fileContent = readFileSync(PROJECTS_FILE_PATH, 'utf8');
    const projects: CustomerProject[] = JSON.parse(fileContent);

    return NextResponse.json({
      success: true,
      projects: projects,
      count: projects.length
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
    const fileContent = readFileSync(PROJECTS_FILE_PATH, 'utf8');
    const projects: CustomerProject[] = JSON.parse(fileContent);

    // Find and update the project
    const projectIndex = projects.findIndex(p => p.id === updatedProject.id);

    if (projectIndex === -1) {
      return NextResponse.json(
        { success: false, error: 'Project not found' },
        { status: 404 }
      );
    }

    // Update the project
    projects[projectIndex] = updatedProject;

    // Write back to file
    writeFileSync(PROJECTS_FILE_PATH, JSON.stringify(projects, null, 2), 'utf8');

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