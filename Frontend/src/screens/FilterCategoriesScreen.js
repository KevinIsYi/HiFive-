import React from 'react';
import { BannerImage } from '../components/BannerImage/BannerImage';
import { DepartmentsFilter } from '../components/DepartmentsFilter/DepartmentsFilter';


export const FilterCategoriesScreen = () => {

    return (
        <>
            <BannerImage
                image="categories-banner"
                mainText="Prepare for a new Cycle"
                buttonText="Shop"
                height={ 70 }
            />
            <DepartmentsFilter />
        </>
    )
}
