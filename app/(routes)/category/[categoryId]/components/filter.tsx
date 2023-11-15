// Filter
"use client"

import Button from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Color, Size } from "@/types";
import { useRouter, useSearchParams } from "next/navigation";
import qs from 'query-string';

interface FilterProps {
    data: (Size | Color)[];
    name: string;
    valueKey: string;
}

const Filter:React.FC<FilterProps> = ({
    data,
    name,
    valueKey
}) => {
    // add search params - in client component use useSearchParams from next/navigation
    const searchParams = useSearchParams();
    const router = useRouter();



    // get selected value
    const selectedValue = searchParams.get(valueKey);

    const onClick = (id: string) => {
        // get current url
        const current = qs.parse(searchParams.toString());
        // build query string
        const query = {
            ...current,
            [valueKey]: id
        };
        
        // user clicked on filter to remove it
        if (current[valueKey] === id) {
            query[valueKey] = null;
        }

        // create new url with query string
        const url = qs.stringifyUrl({
            url: window.location.href,
            query
        }, {skipNull: true});

        router.push(url);
    };


  return (
    <div className="mb-8">
        <h3 className="text-lg font-semibold">
            {name}
        </h3>

        <hr className="my-4"/>

        <div className="flex flex-wrap gap-2">
            {data.map((filter) => (
                <div key={filter.id} className="flex items-center">
                    <Button
                    onClick={() => onClick(filter.id)}
                    className={cn("rounded-md text-sm text-gray-800 p-2 bg-white border border-gray-300", selectedValue === filter.id && "bg-black text-white")}
                    >
                        {filter.name}
                    </Button>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Filter