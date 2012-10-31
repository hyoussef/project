package data.access.dao;

import java.util.List;

import data.model.dto.ProjectDTO;

public interface IProjectsDAO {
	List<ProjectDTO> getListProjects ();
}
