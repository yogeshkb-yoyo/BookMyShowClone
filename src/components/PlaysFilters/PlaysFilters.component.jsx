import { Disclosure } from '@headlessui/react'
import {BiChevronUp,BiChevronDown} from "react-icons/bi";

const PlaysFilter=(props)=> {
  return (
    <Disclosure className="bg-white">
    {({open})=>
        <div>
            <div className="bg-white py-2 px-3 shadow-md">
            <Disclosure.Button className="py-2 flex items-center gap-3">
            {open ? <BiChevronUp/> : <BiChevronDown/>}
                <span className={open ? "text-red-600" : "text-gray-700"}>{props.title}</span>
        </Disclosure.Button>
        <Disclosure.Panel className="text-gray-500">
            <div className="flex items-center gap-3 flex-wrap">
                {props.tags.map((tag) =>
                    <div>
                    <div className="border-2 border-gray-200 px-3 py-2">
                    <span className="text-red-600">{tag}</span>
                    </div>
                    </div>
                )}
            </div>
        </Disclosure.Panel>
        
            </div>
        </div>
    }
    </Disclosure>
  )
}

export default PlaysFilter;