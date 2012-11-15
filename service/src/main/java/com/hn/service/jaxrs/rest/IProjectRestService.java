package com.hn.service.jaxrs.rest;

import data.model.def.IProject;

public interface IProjectRestService {
	IProject getProject(long projectId);
	IProject getProject(long companyId, long entityId, long projectId);

}
