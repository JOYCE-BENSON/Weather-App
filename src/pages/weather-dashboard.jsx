/* eslint-disable no-unused-vars */
import WeatherSkeleton from "@/components/loading-skeleton";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { useGeolocation } from "@/hooks/use-geolocation";
import { AlertTriangle, MapPin, RefreshCw } from "lucide-react";

const WeatherDashboard = () => {
  const{ coordinates,
    error: locationError,
    getLocation,
    isLoading: locationLoading,
     } = useGeolocation();
  
  console.log(coordinates);

  const handleRefresh=()=>{
       getLocation();
       if (coordinates) {
   //reload weather data
       }
  };

  if (locationLoading) {
    return <WeatherSkeleton/>
  }

  if (locationError){
    return(
    <Alert variant="destructive">
    <AlertTriangle className="h-4 w-4" />
    <AlertTitle> Location dError</AlertTitle>
    <AlertDescription className="flex flex-col gap-4">
      <p>{locationError}</p>
      <Button onClick={getLocation } variant={"outline"} className="w-fit">
        <MapPin className="me-2 h-4 w-4"/>
        Enable Location
      </Button>
    </AlertDescription>
  </Alert>
    )
  }

  return (
    <div className="space y-4">
        {/* favourite cities */}
        <div className="flex items-center justify-between">
            <h1 className="text-xl font-bold tracking-tight">My Location</h1>
            <Button variant={'outline'}
            size={"icon"}
            // onClick={handleRefresh}
            // disabled ={
             >
                <RefreshCw className="h-4 w-4"/>
            </Button>
        </div>

        {/* current and Hourly Weather */}
    </div>
  )
}

export default WeatherDashboard;