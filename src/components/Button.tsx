import { Route, setActiveRoute } from "../Redux/slices/routesSlice";
import { useAppDispatch, useAppSelector } from "../hooks"
import { Button } from 'antd';

interface routeProps {
    route: Route
}

function ButtonComponet({ route }: routeProps) {
    const dispatch = useAppDispatch()
    const { id } = useAppSelector(state => state.routes.activeRoute)

    const btnStyle = {
        margin: '10px'
    };

    return (
        <Button
            onClick={() => { dispatch(setActiveRoute(route)) }}
            key={route.id}
            size={"large"}
            style={btnStyle}
            type={route.id === id ? 'primary' : 'default'}
        >
            {route.name}
        </Button>
    )
}

export default ButtonComponet