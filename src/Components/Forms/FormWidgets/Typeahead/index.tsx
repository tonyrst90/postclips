'use client'
import React from 'react'
import { Container, Row } from 'reactstrap'
import Breadcrumbs from '@/CommonComponent/BreadCrumbs'
import { BasicTypeaheadTitle, BloodhoundTitle, CustomTemplatesTitle, FormWidgetsTitle, PrefetchTitle, RemoteTypeaheadTitle, RTLSupportTitle, ScrollableDropdownMenuTitle, TypeaheadTitle } from '@/Constant'
import CommonTypeahead from './Common/CommonTypeahead'
import MultipleSectionsWithHeaders from './MultipleSectionsWithHeaders'
import { basicTypeaheadSubTitle, bloodHoundSubTitle, customTemplateSubTitle, prefetchSubTitle, remoteTypeaheadSubTitle, rTlSupportSubTitle, scrollableDropdownSubTitle } from '@/Data/Forms/FormWidgets'
import { countryList, movieList, oscarWinnersMovieList, statesOfUSA } from '@/Data/Forms/FormWidgets/Typeahead'

const TypeaheadContainer = () => {
    return (
        <>
            <Breadcrumbs mainTitle={TypeaheadTitle} parent={FormWidgetsTitle} title={TypeaheadTitle} />
            <Container fluid>
                <div className="typeahead typeahead-wrapper">
                    <Row>
                        <CommonTypeahead id='basic' title={BasicTypeaheadTitle} subTitle={basicTypeaheadSubTitle} options={statesOfUSA} placeholder="States of USA" />
                        <CommonTypeahead id='prefetch' title={PrefetchTitle} subTitle={prefetchSubTitle} options={countryList} placeholder="Countries" />
                        <CommonTypeahead id='blood' title={BloodhoundTitle} subTitle={bloodHoundSubTitle} options={statesOfUSA} placeholder="States of USA" />
                        <CommonTypeahead id='remote' title={RemoteTypeaheadTitle} subTitle={remoteTypeaheadSubTitle} options={movieList} placeholder="Choose Option" />
                        <CommonTypeahead id='custom' title={CustomTemplatesTitle} subTitle={customTemplateSubTitle} options={oscarWinnersMovieList} placeholder="Oscar winners" />
                        <MultipleSectionsWithHeaders />
                        <CommonTypeahead id='scroll' title={ScrollableDropdownMenuTitle} subTitle={scrollableDropdownSubTitle} options={countryList} placeholder="Countries" />
                        <CommonTypeahead id='rtl' title={RTLSupportTitle} subTitle={rTlSupportSubTitle} options={countryList} placeholder="Countries" />
                    </Row>
                </div>
            </Container>
        </>
    )
}
export default TypeaheadContainer;