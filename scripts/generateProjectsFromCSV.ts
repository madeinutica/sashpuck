import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';
import { parseCSV, mapAllCSVRowsToCustomerProjects } from '../lib/csvProjectLoader';

const csvPath = join(__dirname, '../public/projects.csv');
const outPath = join(__dirname, '../lib/customerProjects.generated.json');

const csvText = readFileSync(csvPath, 'utf8');
const csvRows = parseCSV(csvText);
const projects = mapAllCSVRowsToCustomerProjects(csvRows);

writeFileSync(outPath, JSON.stringify(projects, null, 2));
console.log(`Generated ${projects.length} projects to ${outPath}`);