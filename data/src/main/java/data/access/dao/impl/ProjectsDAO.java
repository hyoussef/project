package data.access.dao.impl;

import java.util.List;

import data.access.dao.IProjectsDAO;
import data.mapper.IProjectsMapper;
import data.model.def.ICompany;
import data.model.def.IEntity;
import data.model.def.IProject;
import data.model.dto.CompanyDTO;
import data.model.dto.EntityDTO;
import data.model.dto.ProjectDTO;

public class ProjectsDAO implements IProjectsDAO {
	private IProjectsMapper projectMapper;

	public List<IProject> getListProjects()
	{
		return projectMapper.getListProjects();
	}
	
	public IProjectsMapper getProjectMapper() {
		return projectMapper;
	}

	public void setProjectMapper(IProjectsMapper projectMapper) {
		this.projectMapper = projectMapper;
	}

	@Override
	public List<IProject> getListProjectsByEntity(IEntity entity) {
		return projectMapper.getListProjectsByEntity(entity);
	}

	@Override
	public List<IProject> getListProjectsByCompany(ICompany company) {
		return projectMapper.getListProjectsByCompany(company);
	}

	@Override
	public List<ICompany> getListCompanies() {
		return this.projectMapper.getListCompanies();
	}

	@Override
	public List<IEntity> getListEntitiesByCompany(ICompany company) {
		return projectMapper.getListEntitiesbyCompany(company);
	}

	@Override
	public IProject getProject(IProject prj) {
		return projectMapper.getProject(prj);
	}

}
