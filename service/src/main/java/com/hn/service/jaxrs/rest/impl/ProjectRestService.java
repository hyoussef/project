package com.hn.service.jaxrs.rest.impl;


import java.util.List;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import com.hn.service.IProjectService;
import com.hn.service.jaxrs.rest.IProjectRestService;
import com.hn.service.model.Company;
import com.hn.service.model.Entity;
import com.hn.service.model.Project;
import data.model.def.ICompany;
import data.model.def.IEntity;
import data.model.def.IProject;

@Produces("application/json")
public class ProjectRestService implements IProjectRestService{
	
	private IProjectService projectService;

	@Override
	@GET
	@Path("companies/{cid}/entities/{eid}/projects/{pid}")
	public IProject getProject(@PathParam("cid")long companyId,@PathParam("eid")long entityId, @PathParam("pid")long projectId) {
		IProject proj = new Project();
		proj.setId(projectId);
		return projectService.getProject(proj);		
	}

	@GET
	@Path("companies")
	public List<ICompany> getCompanies(@PathParam("id")String projectId) {
		return projectService.getCompanies();
	}
	@GET
	@Path("companies/{cid}/entities")
	public List<IEntity> getEntities(@PathParam("cid")long companyId) {
	
		ICompany cmp =  new Company();
		cmp.setId(companyId);
		
		return projectService.getEntities(cmp);		
	}
	
	@GET
	@Path("companies/{cid}/entities/{eid}/projects")
	public List<IProject> getProjects(@PathParam("cid")long companyId,@PathParam("eid")long entityId ) {
		IEntity entity = new Entity();
		entity.setId(entityId);
		return projectService.getProjects(entity);		
	}

	

	public IProjectService getProjectService() {
		return projectService;
	}

	public void setProjectService(IProjectService projectService) {
		this.projectService = projectService;
	}

	@Override
	public IProject getProject(long projectId) {
		// TODO Auto-generated method stub
		return null;
	}

}
