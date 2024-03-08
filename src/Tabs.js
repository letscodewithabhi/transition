import {useTransition} from "react";

export default function Tabs({tab, isActive, onClick}) {
    const [isPending, startTransition] = useTransition()

    if (isActive) {
        return <b>{tab}</b>
    }

    if (isPending) {
        return <b className="inactive-gray-color">{tab}</b>
    }

    return (
        <button onClick={() => {
            startTransition(()=>{

            })
        }}>
            {tab}
        </button>
    );
}