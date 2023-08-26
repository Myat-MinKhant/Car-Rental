import usePlacesAutocomplete, {
  getGeocode,
  getLatLng
} from 'use-places-autocomplete';
import {
  Combobox,
  ComboboxInput,
  ComboboxList,
  ComboboxOption,
  ComboboxPopover,
} from '@reach/combobox';
import '@reach/combobox/styles.css'

export default function PlacesAutocomplete({ setSelected, setCenter }) {
  const {
    ready,
    value,
    setValue,
    suggestions: { status, data },
    clearSuggestions,
  } = usePlacesAutocomplete();

  const handleSelect = async (address) => {
    setValue(address, false);
    clearSuggestions();

    const results = await getGeocode({ address });
    const { lat, lng } = getLatLng(results[0]);
    setSelected({ lat, lng });
    setCenter({ lat: lat, lng: lng })
  }

  return (
    <Combobox onSelect={handleSelect} className=' z-[9999]'>
      <ComboboxInput
        className='w-80 max-h-10 border-2 border-yellow-400 rounded-md pl-5 outline-none'
        value={value}
        placeholder='Search an address...'
        onChange={(e) => setValue(e.target.value)}
        disabled={!ready}
      />
      <ComboboxPopover className=' bg-white'>
        <ComboboxList>
          {status === 'OK' &&
            data.map(({ placeID, description }) => <ComboboxOption key={placeID} value={description} />)
          }
        </ComboboxList>
      </ComboboxPopover>
    </Combobox>
  )
}
