const isSidebarLinkActive = (pathName: string, currentRoute: string) => {
  return (pathName.includes(currentRoute) && currentRoute.length > 1) || pathName === currentRoute
}

export default isSidebarLinkActive
