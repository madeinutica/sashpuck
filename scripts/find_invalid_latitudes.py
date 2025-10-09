import csv

# Path to your CSV file
csv_path = 'public/projects.csv'

# Output file for invalid rows
output_path = 'public/invalid_latitude_rows.csv'

invalid_rows = []

with open(csv_path, newline='', encoding='utf-8') as csvfile:
    reader = csv.reader(csvfile)
    header = next(reader)
    for i, row in enumerate(reader, start=2):
        try:
            lat = float(row[6])
            if lat < -90 or lat > 90:
                invalid_rows.append([i] + row)
        except (ValueError, IndexError):
            invalid_rows.append([i] + row)

with open(output_path, 'w', newline='', encoding='utf-8') as outfile:
    writer = csv.writer(outfile)
    writer.writerow(['RowNumber'] + header)
    writer.writerows(invalid_rows)

print(f"Found {len(invalid_rows)} invalid latitude rows. See {output_path} for details.")
