"use client";
import { Status } from "@prisma/client";
import { Select } from "@radix-ui/themes";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";

const status: { label: string; value: Status | "all" }[] = [
  { label: "All", value: "all" },
  { label: "Open", value: "OPEN" },
  { label: "In Progress", value: "IN_PROGRESS" },
  { label: "Closed", value: "CLOSED" },
];

const IssueStatusFilter = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  return (
    <Select.Root
      defaultValue={searchParams.get("status") || "all"}
      onValueChange={(status) => {
        const params = new URLSearchParams();
        if (status && status !== "all") params.append("status", status);
        if (searchParams.get("orderBy"))
          params.append("orderBy", searchParams.get("orderBy")!);

        searchParams.get("orderBy");
        const query = params.size ? "?" + params.toString() : "";
        router.push("/issues" + query);
      }}
    >
      <Select.Trigger placeholder="Filter by status..." />
      <Select.Content>
        {status.map((status) => (
          <Select.Item key={status.value} value={status.value}>
            {status.label}
          </Select.Item>
        ))}
      </Select.Content>
    </Select.Root>
  );
};

export default IssueStatusFilter;
