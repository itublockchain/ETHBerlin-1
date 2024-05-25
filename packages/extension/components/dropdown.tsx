import Select, {
  components,
  type GroupBase,
  type OptionsOrGroups
} from "react-select"

import { colors } from "~constants"

type OptionType = OptionsOrGroups<unknown, GroupBase<unknown>>[0]

export type ItemType = (OptionType & {
  Icon?: any
  value: any
  label: string
  hideLabel?: boolean
})[]

const { Option } = components

const IconOption = (props: any) => {
  const {
    data: { Icon, label, hideLabel }
  } = props
  return (
    <Option {...props}>
      <div className="flex items-center space-x-2 justify-center">
        {Icon && <Icon />}
        {hideLabel !== true && <span className="text-white">{label}</span>}
      </div>
    </Option>
  )
}

const Dropdown: React.FC<{
  items: ItemType
}> = ({ items }) => {
  return (
    <Select
      options={items}
      defaultInputValue={items?.[0]?.label}
      defaultValue={items?.[0]?.value}
      styles={{
        control: (base) => ({
          ...base,
          backgroundColor: colors["primary-dark"],
          borderRadius: "12px",
          borderWidth: "3px",
          borderColor: colors.secondary,
          color: colors.quaternary
        }),
        valueContainer: (base) => ({
          ...base,
          color: colors.quaternary
        }),
        input: (base) => ({
          ...base,
          color: colors.quaternary
        }),
        option: (base) => ({
          ...base,
          color: colors.quaternary
        })
      }}
      components={{
        Option: IconOption
      }}
    />
  )
}

export default Dropdown
