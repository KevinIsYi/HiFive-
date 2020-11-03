import React from 'react';

import { BannerImage } from '../BannerImage/BannerImage';
import { DepartmentsFilter } from '../DepartmentsFilter/DepartmentsFilter';

export const FilterCategoriesScreen = () => {

    return (
        <>
            <BannerImage
                image="categories-banner"
                mainText="Prepare for a new Cycle"
                buttonText="Shop"
            />
            <DepartmentsFilter />
        </>
    )
}
