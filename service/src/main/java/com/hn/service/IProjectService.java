package com.hn.service;

import java.util.List;

import data.model.def.ICompany;
import data.model.def.IEntity;
import data.model.def.IProject;

public interface IProjectService {
	
	List<ICompany> getCompanies();
	List<IProject> getProjects(IEntity ent);
	List<IEntity> getEntities(ICompany cmp);
	IProject getProject(IProject prj);

}
