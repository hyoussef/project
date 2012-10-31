package com.hn.service.jaxrs.rest.impl;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;

import com.hn.service.jaxrs.rest.IProjectService;
import com.hn.service.model.Project;

@Produces("application/json")
@Path("/projects")
public class ProjectService implements IProjectService{

	@GET
	@Path("{id}")
	public Project getProject(@PathParam("id")String projectId) {
		Project proj = new Project();
		proj.setName("project 1 name");
		proj.setDescription("project description");
		proj.setId(projectId);
		
		return proj;		
	}

}
