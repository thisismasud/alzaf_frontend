
"use client";

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

type PaginationControlsProps = {
  currentPage: number;
  totalPages: number;
};

export default function PaginationControls({
  currentPage,
  totalPages,
}: PaginationControlsProps) {

  const pageNum = Math.max(1, Math.min(currentPage, totalPages));

  return (
    <Pagination>
      <PaginationContent>
        {/* Previous Button */}
        <PaginationItem>
          {pageNum > 1 ? (
            <PaginationPrevious href={`/?page=${pageNum - 1}`} />
          ) : (
            <PaginationPrevious
              href="#"
              className="pointer-events-none opacity-50"
            />
          )}
        </PaginationItem>

        {/* Page Numbers */}
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <PaginationItem key={page}>
            <PaginationLink href={`/?page=${page}`} isActive={page === pageNum}>
              {page}
            </PaginationLink>
          </PaginationItem>
        ))}

        {/* Next Button */}
        <PaginationItem>
          {pageNum < totalPages ? (
            <PaginationNext href={`/?page=${pageNum + 1}`} />
          ) : (
            <PaginationNext
              href="#"
              className="pointer-events-none opacity-50"
            />
          )}
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
