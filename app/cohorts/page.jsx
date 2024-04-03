'use client'
import React, { useContext, useEffect } from "react";
import Link from "next/link";
import { AppContext } from '../context';
import { AppWrapper } from "../context";

export default function CohortsPage() {
    const { cohorts, fetchCohorts } = useContext(AppContext);
    console.log(cohorts, 'cohorts')
    useEffect(() => {
        fetchCohorts();
    }, []);

    return (
        <AppWrapper>

        <div>
            <ul className="flex flex-wrap">
                {cohorts.map((cohort) => (
                    <Link href={`/cohorts/${cohort.id}`}>{cohort.name}</Link>
                    ))}
            </ul>
        </div>
        </AppWrapper>
    );
}
