import React from 'react'
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';


const Setting = () => {
    const [activeTab, setActiveTab] = useState('tab1');

    const handleTabClick = (e, tab) => {
        e.preventDefault(); // 이것을 추가하여 브라우저의 기본 동작을 막습니다.
        setActiveTab(tab);
    };

    return (
        <div className="container mt-3">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">

                    <h1 href="#">
                        <img src='logo.svg' alt="Logo" style={{ marginRight: '10px', width: "40px", height: "40px" }} />
                        Machine 365</h1>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            {/* 네비게이션 항목들이 여기에 들어갑니다. */}
                        </ul>
                        <form className="d-flex">
                            <button className="btn btn-outline-success" type="submit">로그인</button>
                        </form>
                    </div>
                </div>
            </nav>
            <h2>관리</h2>
            <ul className="nav nav-tabs">
                <li className="nav-item">
                    <a className={`nav-link ${activeTab === 'tab1' ? 'active' : ''}`} href="#tab1" onClick={(e) => handleTabClick(e, 'tab1')}>Tab 1</a>
                </li>
                <li className="nav-item">
                    <a className={`nav-link ${activeTab === 'tab2' ? 'active' : ''}`} href="#tab2" onClick={(e) => handleTabClick(e, 'tab2')}>Tab 2</a>
                </li>
                <li className="nav-item">
                    <a className={`nav-link ${activeTab === 'tab3' ? 'active' : ''}`} href="#tab3" onClick={(e) => handleTabClick(e, 'tab3')}>Tab 3</a>
                </li>
            </ul>
            <div className="tab-content" id="myTabContent">
                <div className={`tab-pane fade ${activeTab === 'tab1' ? 'show active' : ''}`} id="tab1">
                    <div className="input-group input-group-lg mb-3">
                        <input type="text" className="form-control" placeholder="Factory name" aria-label="Factory name" />
                        <select className="form-select" defaultValue="Company">
                            <option value="Company">Factory</option>
                            {/* Add more options here */}
                        </select>
                        <select className="form-select" defaultValue="Enabled">
                            <option value="Enabled">Enabled</option>
                            {/* Add more options here */}
                        </select>
                        <div >
                        <button className="btn btn-primary" type="button">
                            <i className="bi bi-search"></i>
                        </button>
                        </div>
                    </div>

                    {/* Search and Select inputs for Tab 1 */}
                    {/* ... */}
                </div>
                <div className={`tab-pane fade ${activeTab === 'tab2' ? 'show active' : ''}`} id="tab2">
                    {/* Input group with search input and dropdown for Tab 2 */}
                    <div className="input-group input-group-lg mb-3">
                        <input type="text" className="form-control" placeholder="Company name" />

                        <select className="form-select" defaultValue="Enabled">
                            <option value="Enabled">Enabled</option>
                            {/* Add more options here */}
                        </select>
                        <div>
                        <button className="btn btn-primary" type="button">
                            <i className="bi bi-search"></i>
                        </button>
                        </div>
                    </div>
                </div>
                <div className={`tab-pane fade ${activeTab === 'tab3' ? 'show active' : ''}`} id="tab3">
                    <div className="input-group input-group-lg mb-3">
                        <input type="text" className="form-control" placeholder="Factory name" aria-label="Factory name" />
                        <select className="form-select" defaultValue="Factory1">
                            <option value="Factory1">Factory 1</option>
                            {/* Add more factory options here */}
                        </select>
                        <select className="form-select" defaultValue="Enabled">
                            <option value="Enabled">Enabled</option>
                            {/* Add more enabled options here */}
                        </select>
                        <select className="form-select" defaultValue="Company1">
                            <option value="Company1">Company 1</option>
                            {/* Add more company options here */}
                        </select>
                        <div>
                        <button className="btn btn-primary" type="button">
                            <i className="bi bi-search"></i>
                        </button>
                        </div>
                    </div>
                    {/* Additional content for Tab 3 */}
                    {/* ... */}
                </div>
            </div>
            <div className="table-responsive">
                <table className="table">
                    <thead>
                        <tr>
                            <th>이름</th>
                            <th>공장ID</th>
                            <th>회사</th>
                            <th>활성화</th>
                            <th>생성일(UTC)</th>
                            <th>수정일(UTC)</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* 반복되는 테이블 로우를 맵핑합니다 */}
                        <tr>
                            <td>Example Name</td>
                            <td>9EAE0FBE-8C01-4FF0-8D39-9E4AF147F660</td>
                            <td>Company</td>
                            <td>Y</td>
                            <td>2023-11-01T11:39:47</td>
                            <td>Sep 20 2023 2:44AM</td>
                            <td>
                                {/* 여기에 버튼이나 추가 액션을 넣을 수 있습니다. */}
                            </td>

                        </tr>
                        <tr>
                            <td>Example Name</td>
                            <td>9EAE0FBE-8C01-4FF0-8D39-9E4AF147F660</td>
                            <td>Company</td>
                            <td>Y</td>
                            <td>2023-11-01T11:39:47</td>
                            <td>Sep 20 2023 2:44AM</td>
                            <td>
                                {/* 여기에 버튼이나 추가 액션을 넣을 수 있습니다. */}
                            </td>

                        </tr>
                        <tr>
                            <td>Example Name</td>
                            <td>9EAE0FBE-8C01-4FF0-8D39-9E4AF147F660</td>
                            <td>Company</td>
                            <td>Y</td>
                            <td>2023-11-01T11:39:47</td>
                            <td>Sep 20 2023 2:44AM</td>
                            <td>
                                {/* 여기에 버튼이나 추가 액션을 넣을 수 있습니다. */}
                            </td>

                        </tr>
                        <tr>
                            <td>Example Name</td>
                            <td>9EAE0FBE-8C01-4FF0-8D39-9E4AF147F660</td>
                            <td>Company</td>
                            <td>Y</td>
                            <td>2023-11-01T11:39:47</td>
                            <td>Sep 20 2023 2:44AM</td>
                            <td>
                                {/* 여기에 버튼이나 추가 액션을 넣을 수 있습니다. */}
                            </td>

                        </tr>
                        <tr>
                            <td>Example Name</td>
                            <td>9EAE0FBE-8C01-4FF0-8D39-9E4AF147F660</td>
                            <td>Company</td>
                            <td>Y</td>
                            <td>2023-11-01T11:39:47</td>
                            <td>Sep 20 2023 2:44AM</td>
                            <td>
                                {/* 여기에 버튼이나 추가 액션을 넣을 수 있습니다. */}
                            </td>

                        </tr>
                        <tr>
                            <td>Example Name</td>
                            <td>9EAE0FBE-8C01-4FF0-8D39-9E4AF147F660</td>
                            <td>Company</td>
                            <td>Y</td>
                            <td>2023-11-01T11:39:47</td>
                            <td>Sep 20 2023 2:44AM</td>
                            <td>
                                {/* 여기에 버튼이나 추가 액션을 넣을 수 있습니다. */}
                            </td>

                        </tr>
                        <tr>
                            <td>Example Name</td>
                            <td>9EAE0FBE-8C01-4FF0-8D39-9E4AF147F660</td>
                            <td>Company</td>
                            <td>Y</td>
                            <td>2023-11-01T11:39:47</td>
                            <td>Sep 20 2023 2:44AM</td>
                            <td>
                                {/* 여기에 버튼이나 추가 액션을 넣을 수 있습니다. */}
                            </td>

                        </tr>
                        <tr>
                            <td>Example Name</td>
                            <td>9EAE0FBE-8C01-4FF0-8D39-9E4AF147F660</td>
                            <td>Company</td>
                            <td>Y</td>
                            <td>2023-11-01T11:39:47</td>
                            <td>Sep 20 2023 2:44AM</td>
                            <td>
                                {/* 여기에 버튼이나 추가 액션을 넣을 수 있습니다. */}
                            </td>

                        </tr>
                    </tbody>
                </table>
            </div>
            <footer className="footer mt-auto py-3 bg-light">
                <div className="container">
                    <div className="row">
                        <div className="col d-flex align-items-center">
                            {/* 언어 선택 콤보 박스 */}
                            <select className="form-select form-select-sm me-2" style={{ width: 'auto' }}>
                                <option value="English">English</option>
                                <option value="Korean">한국어</option>
                                {/* 추가 언어 옵션 */}
                            </select>
                            {/* 로그아웃 버튼 */}
                            <button type="button" className="btn btn-sm btn-outline-secondary">로그아웃</button>
                        </div>
                        <div className="col d-flex justify-content-end align-items-center">
                            {/* 저작권 텍스트 */}
                            <span className="text-muted">© 2023 Machine 365</span>
                        </div>
                    </div>
                </div>
            </footer>



        </div>
    )
}

export default Setting