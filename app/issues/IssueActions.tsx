"use client";
import { Button, Flex } from "@radix-ui/themes";
import Link from "next/link";
import React from "react";
import IssueStatusFilter from "./IssueStatusFilter";
import { useSearchParams } from "next/navigation";

const IssueActions = () => {
  const searchParams = useSearchParams();

  return (
    <Flex mb="5" justify="between">
      <Flex align="center" gap="3">
        <IssueStatusFilter />{" "}
        {searchParams.size > 0 && <Link href="/issues">Clear</Link>}
      </Flex>
      <Button>
        <Link href="/issues/new">New Issue</Link>
      </Button>
    </Flex>
  );
};

export default IssueActions;
