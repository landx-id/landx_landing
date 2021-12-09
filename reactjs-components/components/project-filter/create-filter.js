import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import {Range} from 'rc-slider';
import {fromIDR, toIDR} from "../../util/currency";
import 'rc-slider/assets/index.css';
import {capitalizeTheFirstLetterOfEachWord} from "../../util/common";
import "../project-filter/style.css";
import {ProjectCountPortal} from "./project-count-portal";
import {CreateCardPortal} from "../project-card/components/create-card-portal";

export const Filter = (props) => {

    const [minRange, setMinRange] = useState(props.minimumRange);
    const [maxRange, setMaxRange] = useState(props.maximumRange);
    const [category, setCategory] = useState('allCategory');
    const [sort, setSort] = useState('settlementDate');
    const [project, setProject] = useState(props.projects)
    const [limit, setLimit] = useState(9);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPage, setTotalPage] = useState(countTotalPage(project));
    const [tempData, setTempData] = useState(updateTempData(project));

    function reset() {
        setMinRange(props.minimumRange);
        setMaxRange(props.maximumRange);
        setCategory("allCategory");
        setSort("settlementDate");
        setProject(props.projects);
    }

    function filter() {
        let renderedProjects = props.projects.filter(
            (property) =>
                fromIDR(property['initialTokenPrice']) >= minRange
                && fromIDR(property['initialTokenPrice']) <= maxRange
        )

        if (category !== 'allCategory') {
            renderedProjects = renderedProjects.filter(
                (property) => !category.localeCompare(property["category"])
            )
        }
        renderedProjects = renderedProjects.sort((a, b) => a[sort] > b[sort] ? -1 : 1)
        setProject(renderedProjects);
        setTempData(updateTempData(renderedProjects));
        setTotalPage(countTotalPage(renderedProjects));
        setCurrentPage(1)
    }

    function nextPage(){
        if(currentPage < totalPage){
            let next = currentPage + 1;
            setCurrentPage(next)
        }
    }

    function prevPage(){
        if(currentPage > 1){
            let prev = currentPage - 1;
            setCurrentPage(prev)
        }
    }

    function countTotalPage(projects){
        return Math.ceil(projects.length / limit)
    }

    function updateTempData(projects){
        let data = [];
        let temp = [];
        let epoch = 0;
        for(let i=0; i < projects.length; i++){
            temp.push(projects[i]);
            epoch++;

            if(epoch >= limit || i == (projects.length-1)){
                data.push(temp);
                temp = [];
                epoch = 0;
            }
        }
        return data;
    }

    return (
        <div className="row justify-content-center">
            <ProjectCountPortal count={project.length} reset={reset}/>
            <div className="row col-md-5 col-sm-12 order-md-1 order-1">
                <div className="col-md-6 col-sm-12">
                    <label htmlFor="minimumRange" className="text-primary" style={{fontSize: 13}}>Minimum
                        Price</label>
                    <input type="text" id="minimumRange" className="form-control custom-input" placeholder=""
                           value={toIDR(minRange)} onChange={e => setMinRange(fromIDR(e.target.value))}
                    />
                </div>
                <div className="col-md-6 col-sm-12">
                    <label htmlFor="maximumRange" className="text-primary" style={{fontSize: 13}}>Maximum
                        Price</label>
                    <input type="text" id="maximumRange" className="form-control custom-input" placeholder=""
                           value={toIDR(maxRange)} onChange={e => setMaxRange(fromIDR(e.target.value))}
                    />
                </div>
            </div>

            <div className="row col-md-7 col-sm-12 order-md-2 order-3">
                <div className="col-md-4 col-sm-12">
                    <label htmlFor="categoryForm" className="text-primary" style={{fontSize: 13}}>Kategori</label>
                    <select className="custom-select" id="categoryForm" value={category} onChange={e => setCategory(e.target.value)}>
                        <option value="allCategory">Semua Kategori</option>
                        {Array.from(props.categories).map((category) =>
                            <option key={category} value={category}>{capitalizeTheFirstLetterOfEachWord(category)}</option>
                        )}
                    </select>
                </div>

                <div className="col-md-4 col-sm-12">
                    <label htmlFor="sorterForm" className="text-primary" style={{fontSize: 13}}>Urutkan</label>
                    <select className="custom-select" id="sorterForm" value={sort} onChange={e => setSort(e.target.value)}>
                        <option value="settlementDate">Sisa Hari</option>
                        <option value="name">Nama</option>
                        <option value="symbol">Kode Saham</option>
                        <option value="launchProgress">Perkembangan</option>
                    </select>
                </div>

                <div className="col-md-4 col-sm-12 align-self-end">
                    <button className="btn btn-primary" id="btnFilter" onClick={filter}>
                        TERAPKAN FILTER</button>
                </div>
            </div>

            <div className="row col-md-5 col-sm-12 mt-4 order-md-3 order-2">
                <div className="col-md-12 col-sm-12">
                    <Range min={props.minimumRange} max={props.maximumRange}
                           value={[minRange, maxRange]}
                           onChange={e => {
                               setMinRange(e[0]);
                               setMaxRange(e[1]);
                           }}
                    />

                    <div className="text-primary">
                        <div className="row mt-2">
                            <small className="col text-left align-self-start">1 Juta</small>
                            <small className="col text-right align-self-end">5 Juta</small>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row col-md-7 col-sm-12 order-md-4 order-4">
            </div>
            { tempData.length != 0 ? <CreateCardPortal project={tempData[currentPage-1]} nextPage={nextPage} prevPage={prevPage}/> : ""}
        </div>
    )
}


export const CreateFilter = (props) => {
    return (
        ReactDOM.render(
            <Filter projects={props.projects} key={props.projects}
                minimumRange={props.minimumRange} maximumRange={props.maximumRange} categories={props.categories}/>
            , document.getElementById("base-filter")
        )
    )
}
