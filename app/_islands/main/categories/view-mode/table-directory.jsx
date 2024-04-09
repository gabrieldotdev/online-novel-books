import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/islands/primitives/table";
import { cls } from "@/utils";

export default function TableDirectory({ data, className, ...tableProps }) {
  const displayedFields = ["Thể loại", "Tiêu đề tiểu thuyết", "Chương mới nhất", "Số từ", "Tác giả", "Cập nhật"];

  const fieldTranslations = {
    novelGenre: "Thể loại",
    novelTitle: "Tiêu đề tiểu thuyết",
    latestChapter: "Chương mới nhất",
    wordCount: "Số từ",
    author: "Tác giả",
    lastUpdated: "Cập nhật",
  };

  return (
    <div className="rounded-md border">
      <Table className={className} {...tableProps}>
        <TableHeader>
          <TableRow>
            {displayedFields.map((field, fieldIndex, array) => (
              <TableHead key={fieldIndex} className={fieldIndex === array.length - 1 ? "text-right" : ""}>
                {field}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((comic) => (
            <TableRow key={comic.id}>
              {Object.keys(fieldTranslations).map((field, fieldIndex, array) => (
                <TableCell key={fieldIndex} className={fieldIndex === array.length - 1 ? "text-right truncate" : ""}>
                  <p className="line-clamp-1">{comic[field]}</p>
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
