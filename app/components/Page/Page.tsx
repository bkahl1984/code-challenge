"use client";

import React, { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import Greetings from "../Greetings/Greetings"
import Select from "../Select/Select"
import { PRLabelsObject, PRObject, Option } from "../../interfaces"
import { formatDate } from "../../helpers"

// Define the props interface
interface PageProps {
    pullRequests: PRObject[];
}

// Functional component with default props
const Page: React.FC<PageProps> = ({ pullRequests }) => {
    //const [selectedLabel, setSelectedLabel] = useState<Option | null>(null)
    const [selectedLabel, setSelectedLabel] = useState<Option>({ label: "Show All Labels", value: "showAllLabels"})
    const [filteredPullRequests, setFilteredPullRequests] = useState(pullRequests)
    const filteredLabelOptions = [
        {
            label: "Show All Labels",
            value: "showAllLabels"
        },
        {
            label: "Animals",
            value: "animals"
        },
        {
            label: "Bug",
            value: "bug"
        },
        {
            label: "Enhancement",
            value: "enhancement"
        }
    ]

    useEffect(() => {
        console.log("selectedLabel",selectedLabel)
        let filteredPRS;
        if(selectedLabel.value === "showAllLabels") {
            setFilteredPullRequests(pullRequests)
        } else {
            filteredPRS = pullRequests.filter((pr) => {
                return pr.labels.some(label => label.name === selectedLabel.value)
            }, []);
            setFilteredPullRequests(filteredPRS)
        }
    }, [selectedLabel])

    return (
        <div>
            <Greetings name="Brad Kahl" />
            <br />

            <Image
                className="dark:invert"
                src="/github.svg"
                alt="GitHub Logo"
                width={180}
                height={38}
                priority
            />
            <br />

            <Select
                placeholder="Select a Label"
                selected={selectedLabel}
                options={filteredLabelOptions}
                onChange={(selection: Option) => setSelectedLabel(selection)}
            />
            <br />

            <ul>
                {filteredPullRequests.map((pr: PRObject) => (
                    <li className="font-semibold p-4 border-4 border-indigo-500 dark:bg-gray-700 dark:hover:bg-gray-900 rounded-md border-indigo-500 text-white mb-2" key={pr.id}>
                        <div className="flex">
                            <Link className="flex-1 hover:text-lime-400 hover:underline" href={pr.html_url} passHref={true} target="_blank" title={`Link to: ${pr.title}`}>{pr.title}</Link>
                            <div className="flex flex-end ml-10">
                            {pr.labels.map((label: PRLabelsObject, key: number) => (
                                <div key={key} className={`ml-2 ${(label.color === "0E4C73") ? "text-cyan-600" : (label.color === "a2eeef") ? "text-emerald-300" : "text-red-300"}`}>{label.name}</div>
                            ))}
                            </div>
                        </div>
                        <div className="mt-2">{formatDate(pr.created_at)}</div>
                    </li>
                ))}
            </ul>
        </div>
    );
};
  
export default Page;