package com.hn.service.jaxrs.rest.impl;

import java.util.ArrayList;
import java.util.List;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;

import org.apache.cxf.common.util.ReflectionInvokationHandler.WrapReturn;

import com.hn.service.jaxrs.rest.IProjectService;
import com.hn.service.model.Company;
import com.hn.service.model.Entity;
import com.hn.service.model.Project;

@Produces("application/json")
public class ProjectService implements IProjectService{

	@GET
	@Path("companies/{cid]/entities/{eid}/projects/{pid}")
	public Project getProject(@PathParam("cid")String companyId,@PathParam("eid")String entityId, @PathParam("pid")String projectId) {
		Project proj = new Project();
		
		proj.setName("project 1 name");
		proj.setDescription("project description");
		proj.setId(projectId);
		
		return proj;		
	}

	@GET
	@Path("companies")
	public List<Company> getCompanies(@PathParam("id")String projectId) {
		Company c = new Company();
		c.setId("123");
		c.setName("Alstom");
		c.setDescription("company");
		List<Company> cs = new ArrayList<Company>();
		cs.add(c);
		return cs;		
	}
	@GET
	@Path("companies/{cid]/entities")
	public List<Entity> getEntities(@PathParam("cid")String companyId) {
	
		Entity e = new Entity();
		e.setName("RH");
		e.setId("1");
		e.setDescription("entity desc");
		
		
		Entity e2 = new Entity();
		e2.setName("RH");
		e2.setId("2");
		
				
		List<Entity> es = new ArrayList<Entity>();
		es.add(e);
		es.add(e2);
		return es;		
	}
	@GET
	
	@Path("companies/{cid]/entities/{eid}/projects")
	public List<Project> getProjects(@PathParam("cid")String companyId,@PathParam("eid")String entityId ) {
		Project proj = new Project();
		
		proj.setName("project 1 name");
		proj.setDescription("project description");
		proj.setId("12082");
		
		Project proj2 = new Project();
		proj2.setName("project 2 name");
		proj2.setDescription("project description");
		proj2.setId("1977917");
				

		List<Project> cs = new ArrayList<Project>();
		cs.add(proj);
		cs.add(proj2);
		return cs;		
	}

	@Override
	public Project getProject(String projectId) {
		// TODO Auto-generated method stub
		return null;
	}

}
