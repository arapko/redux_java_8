import {useState} from "react";
import {Store} from "../redux/Store";
import {asyncLocation} from "../redux/apiActions";

export function CityLocationForm(){

    const [latitude,setLatitude] = useState();
    const [longitude,setLongitude] = useState();
    const [imageLocation, setImageLocation] = useState();
    const store = Store.useStore();

    const handleSubmit = event =>{
        event.preventDefault();
        store.dispatch(asyncLocation(latitude,longitude));
    }
    store.subscribe(()=>{
        const state = store.getState().location;
        if(state.data!=null&&state.loading === false){
            setImageLocation(state.data.results[0].locations[0].mapUrl);
        }
    })

    return(
        <form onSubmit={handleSubmit}>
            <label>
                Latitude:
                <input
                    type="text"
                    value={latitude}
                    onChange={(event => setLatitude(event.target.value))}
                />
            </label>
            <label>
                Longitude:
                <input
                    type="text"
                    value={longitude}
                    onChange={(event => setLongitude(event.target.value))}
                />
            </label>
            <input type="submit" value="Submit"/>

            <img
                src={imageLocation}
            />
        </form>
    )
}