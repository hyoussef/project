package data.access.dao;

import java.util.List;
import data.model.def.ICompany;
import data.model.def.IEntity;
import data.model.def.IProject;


public interface IProjectsDAO {
	List<IProject> getListProjects ();
	List<IProject> getListProjectsByEntity (IEntity entity);
	List<IProject> getListProjectsByCompany (ICompany company);
	List<ICompany> getListCompanies();
	List<IEntity> getListEntitiesByCompany(ICompany company);
	IProject getProject(IProject prj);
}
