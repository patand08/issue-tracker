import { Pencil2Icon } from "@radix-ui/react-icons";
import { Flex, Button } from "@radix-ui/themes";
import Link from "next/link";

const EditIssueButton = ({ issueId }: { issueId: number }) => {
  return (
    <Button>
      <Link href={`/issues/${issueId}/edit`}>
        <Flex gap="2" className="items-center">
          <Pencil2Icon />
          Edit
        </Flex>
      </Link>
    </Button>
  );
};

export default EditIssueButton;
