"use client";
import { Button, Flex } from "@radix-ui/themes";
import Link from "next/link";
import React from "react";
import IssueStatusFilter from "./IssueStatusFilter";
import { useSearchParams } from "next/navigation";

const IssueActions = () => {
  const searchParams = useSearchParams();
  const validation =
    searchParams.size > 0 &&
    !(searchParams.size === 1 && searchParams.get("page"));

  return (
    <Flex justify="between">
      <Flex align="center" gap="3">
        <IssueStatusFilter /> {validation && <Link href="/issues">Clear</Link>}
      </Flex>
      <Button>
        <Link href="/issues/new">New Issue</Link>
      </Button>
    </Flex>
  );
};

export default IssueActions;
