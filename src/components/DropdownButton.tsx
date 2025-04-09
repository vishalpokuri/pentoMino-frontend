import { Listbox } from "@headlessui/react";
import { Fragment, useState } from "react";
import { ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

interface DropdownButtonProps {
  value: string;
  onChange: (value: string) => void;
  options: string[];
  label: string;
}

export function DropdownButton({
  value,
  onChange,
  options,
  label,
}: DropdownButtonProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full max-w-xs">
      <Listbox value={value} onChange={onChange}>
        {({ open: isOpen }) => {
          if (isOpen !== open) setOpen(isOpen);

          return (
            <div className="relative">
              <Listbox.Button className="shadow-[inset_0_0_0_2px_#616467] text-black px-8 py-3 w-full rounded-full tracking-widest uppercase font-bold bg-transparent hover:bg-[#616467] hover:text-white dark:text-neutral-200 transition duration-200 flex justify-between items-center">
                {value || label}
                <ChevronDown className="ml-2 h-5 w-5" />
              </Listbox.Button>

              <AnimatePresence>
                {open && (
                  <Listbox.Options
                    as={motion.ul}
                    static
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    // transition={{ duration: 0.2 }}
                    className="absolute mt-2 w-full rounded-md bg-white dark:bg-neutral-900 shadow-lg max-h-60 overflow-auto z-10"
                  >
                    {options.map((opt, idx) => (
                      <Listbox.Option key={idx} value={opt} as={Fragment}>
                        {({ active }) => (
                          <li
                            className={`cursor-pointer px-4 py-2 ${
                              active
                                ? "bg-[#616467] text-white"
                                : "text-black dark:text-neutral-200"
                            }`}
                          >
                            {opt}
                          </li>
                        )}
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                )}
              </AnimatePresence>
            </div>
          );
        }}
      </Listbox>
    </div>
  );
}
