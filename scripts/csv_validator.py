import csv
import sys

# Usage: python csv_validator.py public/projects.csv
if len(sys.argv) < 2:
    print('Usage: python csv_validator.py <csv_file>')
    sys.exit(1)

csv_file = sys.argv[1]
expected_columns = 10

with open(csv_file, newline='', encoding='utf-8') as f:
    reader = csv.reader(f)
    for i, row in enumerate(reader):
        if i == 0:
            print(f'Header columns: {len(row)}')
            continue
        if len(row) != expected_columns:
            print(f'Row {i+1} has {len(row)} columns: {row}')
        if any(cell.strip() == '' for cell in row[:5]):
            print(f'Row {i+1} missing required fields: {row}')
print('Validation complete.')
