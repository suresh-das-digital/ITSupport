import { PageBox } from "@/components/PageBox";
import { IssueCategories } from "./IssueCategories";
import Typography from "@/components/ui/Typography";

export function IssueSection({category}: {category?: any}) {
  if (!category) { return (<></>) }
  return (<>
    <PageBox count={category?.issueCategories?.length} title={category?.title} subTitle={category?.subTitle}>
      <IssueCategories categories={category?.issueCategories} />
      {category?.bottomDesc && (
        <Typography
          variant="p"
          className="text-gray-600 mb-8 text-center max-w-5xl mx-auto"
        >
          {category?.bottomDesc}
        </Typography>
      )}
    </PageBox>
  </>)
}