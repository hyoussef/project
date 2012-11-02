package com.hn.service.model.def;

import data.model.dto.CompanyDTO;

import java.util.Date;

/**
 * Created with IntelliJ IDEA.
 * User: I060356
 * Date: 01/11/12
 * Time: 14:10
 * To change this template use File | Settings | File Templates.
 */
public interface IProject {
    long getId();

    void setId(long id);

    String getName();

    void setName(String name);

    String getDescription();

    void setDescription(String description);

    CompanyDTO getCompany();

    void setCompany(CompanyDTO company);

    Date getStartDate();

    void setStartDate(Date startDate);

    Date getEndDate();

    void setEndDate(Date endDate);
}
