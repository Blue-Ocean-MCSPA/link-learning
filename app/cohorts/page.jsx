'use client'
import React, { useContext, useEffect } from "react";
import Link from "next/link";
import { AppContext } from "../context";

export default function CohortsPage() {
    const { cohorts, fetchCohorts } = useContext(AppContext);

    useEffect(() => {
        fetchCohorts();
    }, []);

    return (
        <div>
            <ul className="flex flex-wrap">
                {cohorts.map((cohort) => (
                    <Link href={`/cohorts/${cohort.id}`}>{cohort.name}</Link>
                ))}
            </ul>
        </div>
    );
}
