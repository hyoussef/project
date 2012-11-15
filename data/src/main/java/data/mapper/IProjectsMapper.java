package data.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import data.model.def.ICompany;
import data.model.def.IEntity;
import data.model.def.IProject;
import data.model.dto.CompanyDTO;
import data.model.dto.EntityDTO;
import data.model.dto.ProjectDTO;


public interface IProjectsMapper {
	List<IProject> getListProjects ();	
	List<IProject> getListProjectsByEntity (@Param("entity")IEntity entity);
	List<IProject> getListProjectsByCompany (@Param("company")ICompany company);
	List<ICompany> getListCompanies();
	List<IEntity> getListEntitiesbyCompany(@Param("company")ICompany company);
	IProject getProject(@Param("project") IProject prj);

}
