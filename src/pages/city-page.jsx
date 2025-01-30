import CurrentWeather from "@/components/current-weather";
import { FavoriteButton } from "@/components/favourite-button";
import HourlyTemperature from "@/components/hourly-temp";
import WeatherSkeleton from "@/components/loading-skeleton";
import { Alert, AlertDescription } from "@/components/ui/alert";
import WeatherForecast from "@/components/weather-forecast";
import { useForecastQuery, useWeatherQuery } from "@/hooks/use-weather";
import { AlertTriangle,} from "lucide-react";
import { useParams, useSearchParams } from "react-router-dom";


const CityPage = () => {
    const [searchParams] = useSearchParams()
    const params = useParams();
    const lat = parseFloat(searchParams.get("lat") || "0");
    const lon = parseFloat(searchParams.get("lon") || "0");

    const coordinates = {lat,lon};

    const weatherQuery = useWeatherQuery(coordinates);
    const forecastQuery = useForecastQuery(coordinates);

    if (weatherQuery.error || forecastQuery.error) {
        return (
          <Alert variant="destructive">
            <AlertTriangle className="h-4 w-4" />
            <AlertDescription>
              Failed to load weather data. Please try again.
            </AlertDescription>
          </Alert>
        );
      }


      if (!weatherQuery.data || !forecastQuery.data || !params.cityName) {
        return <WeatherSkeleton />;
      }

   return (
    <div className="space y-4">
        {/* favourite cities */}
        <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold tracking-tight">
                {params.cityName}, {weatherQuery.data.sys.countery}
                </h1>
                <div>
                    <FavoriteButton
                    data={{ ...weatherQuery.data, name: params.cityName}}
                    />
                </div>
            
        </div>

        
        <div className="grid gap-6">
          <div className="flex flex-col gap-4">
            <CurrentWeather 
            data={weatherQuery.data} 
            
            />
            <HourlyTemperature
            data={forecastQuery.data}/>
         
          </div>

          <div>
          <WeatherForecast data={forecastQuery.data} />
            {/* forecast */}
          </div>
        </div>
    </div>
  )
  
}

export default CityPage;