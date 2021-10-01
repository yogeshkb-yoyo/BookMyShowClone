import { Disclosure } from '@headlessui/react'
import {BiChevronUp,BiChevronDown} from "react-icons/bi";

const PlaysFilter=(props)=> {
  return (
    <Disclosure>
    {({open})=>
        <div>
            <Disclosure.Button className="py-2 flex items-center gap-3">
                {open ? <BiChevronUp/> : <BiChevronDown/>}
                    <span className={open ? "text-red-600" : "text-gray-700"}>Is team pricing available?</span>
            </Disclosure.Button>
            <Disclosure.Panel className="text-gray-500">
                Yes! You can purchase a license that you can share with your entire
                team.
            </Disclosure.Panel>
        </div>
    }
    </Disclosure>
  )
}

export default PlaysFilter;