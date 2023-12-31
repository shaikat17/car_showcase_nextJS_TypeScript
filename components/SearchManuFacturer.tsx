'use client'

import { Combobox, Transition } from "@headlessui/react"
import { SearchManuFacturerProps } from "@/types"
import Image from "next/image"
import { Fragment, useState } from "react"

import { manufacturers } from "@/constants"

const SearchManuFacturer = ({ manuFacturer, setManuFacturer }: SearchManuFacturerProps) => {
    const [query, setQuery] = useState('')

    const filteredManufacturers =
    query === ""
      ? manufacturers
      : manufacturers.filter((item) =>
          item
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
        );


    return (
        <div className="search-manufacturer">
            <Combobox>
                <div className="relative w-full">
                    <Combobox.Button className="absolute top-[14px]">
                        <Image src="/car-logo.svg" width={20} height={20} className="ml-4" alt="Car Logo" />
                    </Combobox.Button>
                    <Combobox.Input className="search-manufacturer__input" placeholder="Volkswagen..." displayValue={(item: string) => item} onChange={(e) => setQuery(e.target.value)} />
                    
                    <Transition as={Fragment} leave="transition ease-in duration-100" leaveFrom="opacity-100" leaveTo="opacity-0" afterLeave={() => setQuery('')}>

                        <Combobox.Options>
                            {filteredManufacturers.length === 0 && query !== "" ? (
                                <Combobox.Option value={query} className="search-manufacturer__option">
                                    Create "{query}"
                                </Combobox.Option>
                            ) : (
                                filteredManufacturers.map((item) => (
                                    <Combobox.Option key={item} value={item} className={({ active }) => `relative search-manufacturer__option ${active ? 'bg-blue-500 text-white' : 'text-gray-900'}`}>
                                        {item}
                                    </Combobox.Option>
                                ))
                            )}
                        </Combobox.Options>

                    </Transition>
                </div>
            </Combobox>
        </div>
    )
}

export default SearchManuFacturer