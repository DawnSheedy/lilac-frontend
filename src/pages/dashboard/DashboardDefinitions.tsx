import { PageDefinition } from "../../types/PageDefinition";
import { PluginDashboard } from "./PluginDashboard";

export const DashboardDefinitions: PageDefinition[] = [{
    element: <PluginDashboard />,
    title: 'Plugin Config',
    path: '/plugin'
}]