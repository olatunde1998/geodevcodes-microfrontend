"use client";
import { UserListSkeleton } from "@/app/components/skeleton/UserListSkeleton";
import { useEffect, useRef, useState, useCallback } from "react";
import { ArrowDown, Check, File, Filter } from "lucide-react";
import { createColumnHelper } from "@tanstack/react-table";
import { Table } from "@/app/components/tables/Table";
import { useRouter } from "next/navigation";
import { formatDate } from "@/lib/utils";
import Image from "next/image";

interface UsersData {
  _id: string;
  fullName?: string;
  email: string;
  avatarImage: string;
  createdAt?: any;
  lastLogin?: any;
  role?: string;
  active: string;
  meta?: string[];
}

interface UsersListProps {
  userData?: any;
  isLoading?: boolean;
  setCurrentPage?: React.Dispatch<React.SetStateAction<number>>;
  currentPage?: number;
  limit?: number;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  debouncedSearch: string;
}

interface IndeterminateCheckboxProps {
  indeterminate?: boolean;
  checked?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

interface RowType {
  original: any; // Replace with the correct type if available
  getToggleSelectedHandler: () => (
    event: React.ChangeEvent<HTMLInputElement>
  ) => void;
  getIsSelected: () => boolean;
  id: any;
}

interface TableType {
  getToggleAllRowsSelectedHandler: () => (
    event: React.ChangeEvent<HTMLInputElement>
  ) => void;
  getIsAllRowsSelected: () => boolean;
  getPreSelectedRowModel: () => { rows: RowType[] };
}

export default function UsersList({
  userData,
  isLoading,
  setCurrentPage,
  currentPage,
  limit,
  setSearch,
  debouncedSearch,
}: UsersListProps) {
  const [selectedRows, setSelectedRows] = useState<RowType[]>([]);
  const router = useRouter();

  // handle check box
  function IndeterminateCheckbox({
    indeterminate,
    ...rest
  }: IndeterminateCheckboxProps) {
    const ref = useRef<HTMLInputElement>(null);

    useEffect(() => {
      if (typeof indeterminate === "boolean" && ref.current) {
        ref.current.indeterminate = !rest.checked && indeterminate;
      }
    }, [indeterminate, rest.checked]);

    return (
      <input type="checkbox" ref={ref} {...rest} className="accent-[#363944]" />
    );
  }

  const onRowSelectionChange = useCallback(
    (row: RowType) => (event: React.ChangeEvent<HTMLInputElement>) => {
      row.getToggleSelectedHandler()(event);
      if (!row.getIsSelected()) {
        setSelectedRows((prev) => [...prev, row.original]);
      } else {
        setSelectedRows((prev) => prev.filter((item) => item !== row.original));
      }
    },
    []
  );

  const onAllRowsSelectionChange = useCallback(
    (table: TableType) => (event: React.ChangeEvent<HTMLInputElement>) => {
      table.getToggleAllRowsSelectedHandler()(event);
      if (table.getIsAllRowsSelected()) {
        setSelectedRows([]);
      } else {
        setSelectedRows(
          table.getPreSelectedRowModel().rows.map((row) => row.original)
        );
      }
    },
    []
  );

  // create columnHelper
  const columnHelper = createColumnHelper<UsersData>();
  // Table columns
  const columns = [
    columnHelper.accessor("_id", {
      header: ({ table }) => (
        <div>
          <IndeterminateCheckbox
            {...{
              checked: table.getIsAllRowsSelected(),
              indeterminate: table.getIsSomeRowsSelected(),
              onChange: onAllRowsSelectionChange(table),
            }}
          />
        </div>
      ),
      cell: ({ row }) => (
        <div className="">
          <IndeterminateCheckbox
            {...{
              checked: row.getIsSelected(),
              disabled: !row.getCanSelect(),
              indeterminate: row.getIsSomeSelected(),
              onChange: onRowSelectionChange(row),
            }}
          />
        </div>
      ),
    }),
    columnHelper.accessor("fullName", {
      cell: (info) => (
        <span className="flex items-center gap-2">
          {info?.row?.original?.avatarImage ? (
            <span className="w-fit h-fit rounded-full bg-slate-200 flex items-center justify-center">
              <Image
                src={info?.row?.original?.avatarImage}
                width={100}
                height={100}
                alt={`${info?.row?.original?.fullName} profile image`}
                className="w-8 h-8 rounded-full"
              />
            </span>
          ) : (
            <span className="w-fit h-fit p-2 rounded-full bg-slate-200 flex items-center justify-center">
              <File size={14} />
            </span>
          )}
          <span className="whitespace-normal break-words overflow-hidden text-ellipsis max-w-[130px]">
            {info?.row?.original?.fullName}
          </span>
        </span>
      ),
      header: () => (
        <span className="text-[#101828] dark:text-accent-foreground">Name</span>
      ),
    }),
    columnHelper.accessor("createdAt", {
      cell: (info) => <span>{formatDate(info?.row?.original?.createdAt)}</span>,
      header: () => (
        <span className="flex items-center text-[#101828] dark:text-accent-foreground">
          Created date
          <ArrowDown size={18} className="ml-2" />
        </span>
      ),
    }),
    columnHelper.accessor("role", {
      header: () => (
        <span className="text-[#101828] dark:text-accent-foreground">Role</span>
      ),
      cell: (info) => (
        <div
          className={`
          ${
            info?.row?.original?.role === "Admin"
              ? "bg-[#D1FADF] text-[#079455] w-fit px-3"
              : info?.row?.original?.role === "User"
              ? "bg-primary/80 text-white w-fit px-3"
              : "bg-[#EDEDF1] text-[#6C748B] w-fit px-3"
          } text-center p-1 rounded-2xl flex items-center space-x-2 justify-center
          `}
        >
          <Check size={10} />
          <p className="capitalize">
            {info
              ?.renderValue()
              ?.toLowerCase()
              ?.replace(/\b\w/g, (char: string) => char.toUpperCase())}
          </p>
        </div>
      ),
    }),
    columnHelper.accessor("lastLogin", {
      cell: (info) => <span>{formatDate(info?.row?.original?.lastLogin)}</span>,
      header: () => (
        <span className="flex items-center text-[#101828] dark:text-accent-foreground">
          Last Login
        </span>
      ),
    }),
    columnHelper.accessor("email", {
      cell: (info) => <span>{info?.row?.original?.email}</span>,
      header: () => (
        <span className="text-[#101828] dark:text-accent-foreground">
          Email
        </span>
      ),
    }),
    columnHelper.accessor("active", {
      header: () => (
        <span className="text-[#101828] dark:text-accent-foreground">
          Status
        </span>
      ),
      cell: (info) => (
        <div
          className={`
            ${
              info?.row?.original?.active
                ? "bg-[#D1FADF] text-[#079455] px-3 w-fit"
                : "bg-[#f3392f] text-[#FFFFFF] px-3 w-fit"
            } text-center p-1 rounded-2xl 
            `}
        >
          <p className="capitalize">
            {info?.row?.original?.active ? "Active" : "Inactive"}
          </p>
        </div>
      ),
    }),
  ];

  // Pagination Logic Implementation
  const handleNextPage = () => {
    if (
      setCurrentPage &&
      currentPage !== undefined &&
      userData?.meta?.hasNextPage
    ) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handlePreviousPage = () => {
    if (setCurrentPage && currentPage !== undefined && currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  return (
    <>
      <div>
        <div>
          <div className="md:flex items-center md:space-x-4">
            <div className="w-full">
              <p className="text-muted-foreground text-lg font-semibold dark:text-accent-foreground">
                Existing Users
              </p>
              <p className="text-sm text-[#6C748B] font-light">
                Browse the list of active users.
              </p>
            </div>

            <div className="md:w-[500px]">
              <input
                type="text"
                onChange={(e: any) => setSearch(e.target.value)}
                className="bg-background border border-accent-primary w-full p-2 mt-4 md:mt-0 rounded-md cursor-text placeholder:text-xs focus:border-primary focus:ring-0 focus:outline-none"
                placeholder="Search... ✍️"
              />
            </div>
            <div className="dark:text-accent-foreground my-4 flex p-2 w-[100px] justify-center items-center gap-[8px] rounded-[8px] cursor-pointer border dark:border-muted dark:hover:bg-muted border-[#D0D5DD] text-[#344054]">
              <Filter className="w-4 h-4 md:w-5 md:h-5" />
              <p className="text-sm md:text-md">Filter</p>
            </div>
          </div>
        </div>

        {/* ===== USER LIST AND SKELETON GOES HERE === */}
        {isLoading ? (
          <div className="mt-6 ">
            <UserListSkeleton />
          </div>
        ) : userData?.data?.length === 0 && debouncedSearch ? (
          <div className="text-base text-center border-t-[1.3px] border-slate-200 mt-10 pt-20 md:pt-32 max-w- bg-white rounded-lg p-6">
            No User Found, Please check back later.
          </div>
        ) : (
          <div className="mt-3 pt-6 h-auto border-t-[1.3px] border-slate-200 dark:border-t-muted rounded-tr-[8px] bg-white dark:bg-background max-w-[760px] md:max-w-none">
            <Table
              data={userData ? userData?.data : []}
              columns={columns}
              limit={limit}
              currentPage={currentPage}
              totalItems={userData?.meta?.totalItems}
              handleNextPage={handleNextPage}
              handlePreviousPage={handlePreviousPage}
              endCursor={userData?.meta?.endCursor}
            />
          </div>
        )}
      </div>
    </>
  );
}
