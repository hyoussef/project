package data.access.dao.impl;

import java.util.List;

import data.access.dao.IProjectsDAO;
import data.mapper.IProjectsMapper;
import data.model.dto.ProjectDTO;

public class ProjectsDAO implements IProjectsDAO {
	private IProjectsMapper projectMapper;

	public List<ProjectDTO> getListProjects()
	{
		return projectMapper.getListProjects();
	}
	
	public IProjectsMapper getProjectMapper() {
		return projectMapper;
	}

	public void setProjectMapper(IProjectsMapper projectMapper) {
		this.projectMapper = projectMapper;
	}

}
