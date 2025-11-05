import { IssueCategoryType } from "@/utils/constant/serviceDetailData"
import IssueCategory from "./IssueCategory"
import SpecificIssueList from "./SpecificIssueList"
import SpecificIssue from "./SpecificIssue"

type Props = {
  categories: IssueCategoryType[]
}

export function IssueCategories({categories}: Props) {
  return (<>
    {categories.map((cat, i) => (
      <IssueCategory
        title={cat.title}
        description={cat.description}
        bottomDesc={cat.bottomDesc}
        key={`service-issue-category-${cat.title}-${i}`}
      >
        {cat?.issues?.map((catIssue) =>
          catIssue.type === "list" ? (
            <SpecificIssueList
              key={`service-issue-category-categories-${cat.title}-${catIssue.title}`}
              title={catIssue.title}
              options={catIssue.options || []}
            />
          ) : (
            <SpecificIssue
              key={`service-issue-category-categories-${cat.title}-${catIssue.title}`}
              title={catIssue.title}
              problemDescription={catIssue.problemDescription}
              solution={catIssue.solution}
            />
          )
        )}
      </IssueCategory>
    ))}
  </>)
}