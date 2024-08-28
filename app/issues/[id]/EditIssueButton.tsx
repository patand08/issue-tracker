"use client";
import { Pencil2Icon } from "@radix-ui/react-icons";
import { Flex, Button } from "@radix-ui/themes";
import { useRouter } from "next/navigation";

const EditIssueButton = ({ issueId }: { issueId: number }) => {
  const router = useRouter();

  return (
    <Button
      onClick={() => {
        router.push(`/issues/${issueId}/edit`);
      }}
    >
      <Flex gap="2" className="items-center">
        <Pencil2Icon />
        Edit
      </Flex>
    </Button>
  );
};

export default EditIssueButton;
