package com.hn.service.impl;


import java.util.List;

import com.hn.service.IProjectService;
import data.access.dao.IProjectsDAO;
import data.model.def.ICompany;
import data.model.def.IEntity;
import data.model.def.IProject;

public class ProjectServiceImpl implements IProjectService {

	private IProjectsDAO projectDAO ;
	
	public IProjectsDAO getProjectDAO() {
		return projectDAO;
	}

	public void setProjectDAO(IProjectsDAO projectDAO) {
		this.projectDAO = projectDAO;
	}

	
	@Override
	public List<ICompany> getCompanies() {
		List<ICompany> list = projectDAO.getListCompanies();  
		return list;
	}

	@Override
	public List<IEntity> getEntities(ICompany cmp) {
		List<IEntity> list = projectDAO.getListEntitiesByCompany(cmp);  
		return list;
	}

	@Override
	public List<IProject> getProjects(IEntity ent) {
		List<IProject> list = projectDAO.getListProjectsByEntity(ent);  
		return list;
	}

	@Override
	public IProject getProject(IProject prj) {
		return projectDAO.getProject(prj);
	}

	
}
