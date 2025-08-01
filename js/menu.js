function generateMenu(basePath = '') {
    return `
        <div class="sidebar-content">
            <div class="sidebar-brand">
                <a href="${basePath}index.html">ID Factory</a>
                <div id="close-sidebar">
                    <i class="fas fa-times"></i>
                </div>
            </div>
            <div class="sidebar-menu">
                <ul>
                    <li>
                        <a href="${basePath}index.html">
                            <i class="fa fa-book"></i>
                            <span>Glosary</span>
                        </a>
                    </li>
                    <li class="header-menu">
                        <span>SDK Flows</span>
                    </li>
                    <li class="sidebar-dropdown">
                        <a href="#">
                            <i class="fa fa-circle"></i>
                            <span>Enroll</span>
                        </a>
                        <div class="sidebar-submenu">
                            <ul>
                                <li>
                                    <a href="${basePath}flujos/FlujoGeneralEnroll.html">General</a>
                                </li>
                                <li>
                                    <a href="${basePath}flujos/FlujoGeneralEnrollEcuador.html">Ecuador</a>
                                </li>
                                <li>
                                    <a href="${basePath}flujos/FlujoGeneralEnrollPeru.html">Perú</a>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li class="sidebar-dropdown">
                        <a href="${basePath}flujos/Verify.html">
                            <i class="fa fa-circle"></i>
                            <span>Verify</span>
                        </a>
                    </li>
                    <li class="header-menu">
                        <span>Web flows</span>
                    </li>
                    <li class="sidebar-dropdown">
                        <a href="#">
                            <i class="fa fa-square"></i>
                            <span>Enroll</span>
                        </a>
                        <div class="sidebar-submenu">
                            <ul>
                                <li>
                                    <a href="${basePath}flujos/flujoGeneralWebIdFactory.html">IdFactory Web page</a>
                                </li>
                                <li>
                                    <a href="${basePath}flujos/flujoGeneralWebCustomer.html">Integration by routine</a>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li class="sidebar-dropdown">
                        <a href="#">
                            <i class="fa fa-square"></i>
                            <span>Verify</span>
                        </a>
                        <div class="sidebar-submenu">
                            <ul>
                                <li>
                                    <a href="${basePath}flujos/FlujoComponentesImagenesVerify.html">Verify web page</a>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li class="header-menu">
                        <span>Documents</span>
                    </li>
                    <li class="sidebar-dropdown">
                        <a href="#">
                            <i class="fa fa-book"></i>
                            <span>User Manuals</span>
                        </a>
                        <div class="sidebar-submenu">
                            <ul>
                                <li>
                                    <a href="${basePath}manuales/ENAdministrator.html">Administrator Rol Manual</a>
                                </li>
                                <li>
                                    <a href="${basePath}manuales/ENQuery.html">Query Rol Manual</a>
                                </li>
                                <li>
                                    <a href="${basePath}manuales/ENTechnicalRole.html">Technical Rol Manual</a>
                                </li>
                                <li>
                                    <a href="${basePath}manuales/ENMinimumRequirements.html">Minimum Requirements</a>
                                </li>
                                <li>
                                    <a href="${basePath}manuales/ANS LSA.html">LSA - ANS</a>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li class="header-menu">
                        <span>Technical documentation</span>
                    </li>
                    <li class="sidebar-dropdown">
                        <a href="#">
                            <i class="fa fa-book"></i>
                            <span>Api's</span>
                        </a>
                        <div class="sidebar-submenu">
                            <ul>
                                <li>
                                    <a href="${basePath}apis/AuthorizationGetToken.html">
                                        <span>AuthorizationGetToken</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="${basePath}apis/Back.html">
                                        <span>Back</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="${basePath}apis/Close.html">
                                        <span>Close</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="${basePath}apis/FindByNumberIdSucces.html">
                                        <span>FindByNumberIdSucces</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="${basePath}apis/FindByNumberIdSuccesList.html">
                                        <span>FindByNumberIdSuccesList</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="${basePath}apis/Front.html">
                                        <span>Front</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="${basePath}apis/GetImageByIdIdentity.html">
                                        <span>GetImageById Identity</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="${basePath}apis/GetImageByIdTransaction.html">
                                        <span>GetImageById Transact</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="${basePath}apis/GetUidLiveness.html">
                                        <span>GetUidLiveness</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="${basePath}apis/GetInvitationByKey.html">
                                        <span>GetInvitationByKey</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="${basePath}apis/Enroll.html">
                                        <span>Invitations/Enroll</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="${basePath}apis/New.html">
                                        <span>New</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="${basePath}apis/InvitationsVerify.html">
                                        <span>Invitations/Verify</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="${basePath}apis/Validation{id}.html">
                                        <span>GetTransactionById</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="${basePath}apis/Verify.html">
                                        <span>Verify</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="${basePath}apis/GetChallengeVoice.html">
                                        <span>GetChallengeVoice</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="${basePath}apis/NewVoice.html">
                                        <span>NewVoice</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="${basePath}apis/TransactionFraudRegister.html">
                                        <span>Fraud Register</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="${basePath}apis/TransactionFraudLogin.html">
                                        <span>Fraud Login</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="${basePath}apis/TransactionFraudTransaction.html">
                                        <span>Fraud transaction</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="${basePath}apis/TransactionFraudAddPayMethod.html">
                                        <span>Fraud Add Pay Method</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="${basePath}apis/Delete Identity.html">
                                        <span>Delete identity</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="${basePath}apis/Inactive Identity.html">
                                        <span>Inactive identity</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    `;
}

function loadMenu() {
    const currentPath = window.location.pathname;
    let basePath = '';
    
    if (currentPath.includes('/apis/') || currentPath.includes('/flujos/') || currentPath.includes('/manuales/')) {
        basePath = '../';
    }
    
    const sidebar = document.getElementById('sidebar');
    if (sidebar) {
        sidebar.innerHTML = generateMenu(basePath);
    }
}

document.addEventListener('DOMContentLoaded', loadMenu);