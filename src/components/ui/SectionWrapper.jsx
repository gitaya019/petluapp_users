import EmptyState from "./EmptyState";

export default function SectionWrapper({

    data = [],

    children,

    emptyTitle,

    emptyMessage,
}) {

    if (!data?.length) {

        return (

            <EmptyState
                title={emptyTitle}
                message={emptyMessage}
            />
        );
    }

    return children;
}