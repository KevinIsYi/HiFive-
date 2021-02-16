import { useState } from "react";

export const useFilters = () => {
    const [sliderValue, setSliderValue] = useState(3000);
    const [textFilter, setTextFilter] = useState('');
    const [buttonClasses, setButtonClasses] = useState({
        ascendant: 'departments-filter__sort-no-focus',
        descendant: 'departments-filter__sort-no-focus'
    });
    const { ascendant, descendant } = buttonClasses;

    const sortAsc = () => {
        setButtonClasses({
            ascendant: 'departments-filter__sort-focus',
            descendant: 'departments-filter__sort-no-focus'
        });
    }
    const sortDesc = () => {
        setButtonClasses({
            ascendant: 'departments-filter__sort-no-focus',
            descendant: 'departments-filter__sort-focus'
        });
    }

    const changeTextFilter = ({ target }) => {
        setTextFilter(target.value);
    }

    const changeSliderValue = ({ target }) => {
        setSliderValue(target.value);
        resetButtonsClasses();
    }

    const resetButtonsClasses = () => {
        setButtonClasses({
            ascendant: 'departments-filter__sort-no-focus',
            descendant: 'departments-filter__sort-no-focus',
        });
    }

    return {
        ascendant,
        descendant,
        textFilter,
        sliderValue,
        sortAsc,
        sortDesc,
        changeTextFilter,
        changeSliderValue,
        resetButtonsClasses
    }
};