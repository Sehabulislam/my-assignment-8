import { toast } from "react-toastify";

const getInstallApps = () => {
    const installApps = localStorage.getItem('install-apps');

    if(installApps){
        const installAppsArray = JSON.parse(installApps);
        return installAppsArray;
    }
    else{
        return [];
    }
}

const addToLocal = (id) => {
    const installApps = getInstallApps();

    if(installApps.includes(id)){
        toast.error('App Already Installed');
    }
    else{
        installApps.push(id);
        const data = JSON.stringify(installApps);
        localStorage.setItem('install-apps', data);
        toast.success('App Installed Successfully');
    }
}

const removeFromLocal = (id) => {
    const installApps = getInstallApps();
    const currentApps = installApps.filter(appId => appId !== id);
    const data = JSON.stringify(currentApps);
    localStorage.setItem('install-apps', data);
    toast.info('App Uninstalled Successfully');
}

export {addToLocal, getInstallApps,removeFromLocal};